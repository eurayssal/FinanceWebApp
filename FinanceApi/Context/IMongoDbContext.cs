using FinanceApi.Models;

namespace FinanceApi.Context
{
    public interface IMongoDbContext<T> where T : BaseModel
    {
        Task<List<T>> GetAllAsync(Guid userId, CancellationToken cancellation);
        Task<T> GetAsync(Guid id, CancellationToken cancellation);
        Task InsertAsync(T model, CancellationToken cancellation);
        Task UpdateAsync(T model, CancellationToken cancellation);
        Task RemoveAsync(Guid id, CancellationToken cancellation);
    }
}
