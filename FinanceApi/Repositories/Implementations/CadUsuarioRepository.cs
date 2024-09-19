using FinanceApi.Context.FinanceApi.Context;
using FinanceApi.Models;
using FinanceApi.Repositories.Interfaces;
using MongoDB.Driver.Linq;

namespace FinanceApi.Repositories.Implementations
{
    public class CadUsuarioRepository : MongoDbContext<CadUsuario>, ICadUsuarioRepository
    {
        public async Task<CadUsuario> GetByEmailAsync(string email, CancellationToken cancellation)
        {
            return await Query
                .Where(w => w.Email == email)
                .SingleOrDefaultAsync(cancellation);
        }
    }
}
