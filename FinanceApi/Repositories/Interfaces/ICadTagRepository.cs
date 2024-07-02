using FinanceApi.Models;
namespace FinanceApi.Repositories.Interface
{
    public interface ICadTagRepository
    {
        Task<List<CadTag>> GetAllAsync(CancellationToken cancellation);
        Task<CadTag> GetAsync(Guid id, CancellationToken cancellation);
        Task InsertAsync(CadTag cadTag, CancellationToken cancellation);
        Task UpdateAsync(CadTag cadTag, CancellationToken cancellation);
        Task DeleteAsync(Guid id, CancellationToken cancellation);
    }
}
