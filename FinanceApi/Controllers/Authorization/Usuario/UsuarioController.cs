using FinanceApi.Controllers.Authorization.Login;
using FinanceApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FinanceApi.Controllers.Authorization.Usuario
{
    [ApiController]
    [Route("api/usuario")]
    public class UsuarioController(IUsuarioRepository repository) : ControllerBase
    {
        private readonly IUsuarioRepository _repository = repository;

        [HttpPost, Route("register")]
        public async Task<IActionResult> RegisterAsync(UsuarioViewModel viewModel, CancellationToken cancellation)
        {
            try
            {
                if (string.IsNullOrEmpty(viewModel.Email) || string.IsNullOrEmpty(viewModel.Senha))
                    throw new ArgumentException("E-mail e senha são obrigatórios.");

                var senhaEncriptada = BCrypt.Net.BCrypt.HashPassword(viewModel.Senha);

                var newUsuario = new Models.Authorization.Usuario(viewModel.Nome,
                    viewModel.Email,
                    senhaEncriptada);

                var token = Guid.NewGuid().ToString();

                await _repository.InsertAsync(newUsuario, cancellation);

                return Ok(new { message = "Usuário registrado com sucesso." });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost, Route("login")]
        public async Task<IActionResult> Login(LoginViewModel viewModel, CancellationToken cancellation)
        {
            try
            {
                var token = await LoginUserAsync(viewModel, cancellation);
                return Ok(new { token });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public async Task<string> LoginUserAsync(LoginViewModel viewModel, CancellationToken cancellation)
        {
            var user = await _repository.GetByEmailAsync(viewModel.Email, cancellation);
            if (user == null)
            {
                throw new ArgumentException("Invalid email or password");
            }

            if (!BCrypt.Net.BCrypt.Verify(viewModel.Senha, user.Senha))
            {
                throw new ArgumentException("Invalid email or password");
            }

            var token = GenerateJwtToken(user);

            return token;
        }

        public string GenerateJwtToken(Models.Authorization.Usuario cadUsuario)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("DImHfbdILAITTQgdM4bdQ7FhMPAsZb9xi+vjCs7ESD4=\r\n");

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, cadUsuario.Email),
                    new Claim(ClaimTypes.Role, "CadUsuario")
                }),
                Expires = DateTime.UtcNow.AddHours(3),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
