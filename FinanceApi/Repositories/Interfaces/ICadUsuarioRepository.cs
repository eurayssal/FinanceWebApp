using FinanceApi.Context;
using FinanceApi.Models;

namespace FinanceApi.Repositories.Interfaces
{
    public interface ICadUsuarioRepository : IMongoDbContext<CadUsuario>
    {
    }
}
