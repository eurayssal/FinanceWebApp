using FinanceApi.Models;

namespace FinanceApi.Repositories.Interfaces
{
    public interface ICadCartaoRepository
    {
        Task<CadCartao> GetByIdAsync(Guid id, CancellationToken cancellation);

        Task<List<CadCartao>> GetAllAsync(CancellationToken cancellation);

        Task CreateAsync(CadCartao cadCatao, CancellationToken cancellation);

        Task UpdateAsync(CadCartao cadCartao, CancellationToken cancellation);

        Task RemoveAsync(Guid id, CancellationToken cancellation);
    }
}
