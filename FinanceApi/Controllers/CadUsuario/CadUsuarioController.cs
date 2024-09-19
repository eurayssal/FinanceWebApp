using FinanceApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FinanceApi.Controllers.CadUsuario
{
    [ApiController]
    [Route("api/usuario")]
    public class CadUsuarioController(ICadUsuarioRepository repository) : ControllerBase
    {
        private readonly ICadUsuarioRepository _repository = repository;

        [HttpPost, Route("register")]
        public async Task<IActionResult> RegisterAsync(CadUsuarioViewModel viewModel, CancellationToken cancellation)
        {
            try
            {
                if (string.IsNullOrEmpty(viewModel.Email) || string.IsNullOrEmpty(viewModel.Senha))
                    throw new ArgumentException("E-mail e senha são obrigatórios.");

                var senhaEncriptada = BCrypt.Net.BCrypt.HashPassword(viewModel.Senha);

                var newUsuario = new Models.CadUsuario(viewModel.Nome,
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

        public string GenerateJwtToken(Models.CadUsuario cadUsuario)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("supersecretKey");

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
