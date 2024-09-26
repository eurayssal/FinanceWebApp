using System.Security.Cryptography;

namespace FinanceApi.Infra.Encrypt
{
    public static class SecretKeyGenerator
    {
        public static string GenerateSecretKey()
        {
            byte[] randomBytes = new byte[32];

            using RandomNumberGenerator rng = RandomNumberGenerator.Create();
            rng.GetBytes(data: randomBytes);

            string secretKey = Convert.ToBase64String(inArray: randomBytes);
            return secretKey;
        }
    }
}