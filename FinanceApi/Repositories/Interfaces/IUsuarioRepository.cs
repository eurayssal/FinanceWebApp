using FinanceApi.Context;
using FinanceApi.Models.Authorization;

namespace FinanceApi.Repositories.Interfaces
{
    public interface IUsuarioRepository : IMongoDbContext<Usuario>
    {
        Task<Usuario> GetByEmailAsync(string email, CancellationToken cancellation);
    }
}
