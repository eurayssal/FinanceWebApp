using FinanceApi.Context.FinanceApi.Context;
using FinanceApi.Models;
using FinanceApi.Repositories.Interfaces;

namespace FinanceApi.Repositories.Implementations
{
    public class CadTagRepository : MongoDbContext<CadTag>, ICadTagRepository
    {

    }
}
