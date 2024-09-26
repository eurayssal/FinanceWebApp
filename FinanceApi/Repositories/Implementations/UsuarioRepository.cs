using FinanceApi.Context.FinanceApi.Context;
using FinanceApi.Models;
using FinanceApi.Repositories.Interfaces;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace FinanceApi.Repositories.Implementations
{
    public class UsuarioRepository : MongoDbContext<Usuario>, IUsuarioRepository
    {
        public async Task<Usuario> GetByEmailAsync(string email, CancellationToken cancellation)
        {
            return await Query
                .Where(w => w.Email == email)
                .SingleOrDefaultAsync(cancellation);

        }
    }
}
