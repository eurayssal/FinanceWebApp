using FinanceApi.Context.FinanceApi.Context;
using FinanceApi.Models.Authorization;
using FinanceApi.Repositories.Interfaces;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace FinanceApi.Repositories.Implementations
{
    public class UsuarioRepository : MongoDbContext<Usuario>, IUsuarioRepository
    {
        public async Task<Usuario> GetByEmailAsync(string email, CancellationToken cancellation)
        {
            var x = await Query
                .Where(w => w.Email == email)
                .SingleOrDefaultAsync(cancellation);

            return x;

        }
    }
}
