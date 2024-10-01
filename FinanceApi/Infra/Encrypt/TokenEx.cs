using FinanceApi.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FinanceApi.Infra.Encrypt
{
    public static class TokenEx<T> where T : BaseModel
    {
        public static string GenerateJwtToken(T model, JwtSettings jwtSettings)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(s: jwtSettings.SecretKey);

            var tokenDescriptio = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims:
                [
                    new Claim(type: ClaimTypes.NameIdentifier, value: model.Id.ToString()),
                ]),
                //Expires = DateTime.UtcNow.AddMinutes(value: jwtSettings.AccessTokenExpirationMinutes),
                Expires = DateTime.UtcNow.AddYears(1),
                SigningCredentials = new SigningCredentials(key: new SymmetricSecurityKey(key), algorithm: SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptio);
            return tokenHandler.WriteToken(token);
        }

    }
}
