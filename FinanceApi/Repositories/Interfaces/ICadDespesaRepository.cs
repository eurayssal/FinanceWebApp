using FinanceApi.Models;

namespace FinanceApi.Repositories.Interfaces
{
    public interface ICadDespesaRepository
    {
        Task<List<CadDespesa>> GetAllAsync(CancellationToken cancellation);
        Task<CadDespesa> GetAsync(Guid id, CancellationToken cancellation);
        Task InsertAsync(CadDespesa cadDespesa, CancellationToken cancellation);
        Task UpdateAsync(CadDespesa cadDespesa, CancellationToken cancellation);
        Task DeleteAsync(Guid id, CancellationToken cancellation);
    }
}
