using FinanceApi.Context.FinanceApi.Context;
using FinanceApi.Models;
using FinanceApi.Repositories.Interfaces;

namespace FinanceApi.Repositories.Implementations
{
    public class CadCartaoRepository : MongoDbContext<CadCartao>, ICadCartaoRepository
    {

    }
}
