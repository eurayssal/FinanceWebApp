using FinanceApi.Models;

namespace FinanceApi.Repositories.Interfaces
{
    public interface ICadContaRepository
    {
        /// <summary>
        /// Retorna os dados para a tela.
        /// </summary>
        Task<List<CadConta>> GetAllAsync(CancellationToken cancellation);

        /// <summary>
        /// Retorna um dado específico para a tela.
        /// </summary>
        Task<CadConta> GetByIdAsync(Guid id, CancellationToken cancellation);

        /// <summary>
        /// Atualiza todos os campos alterados do dado.
        /// </summary>
        Task UpdateAsync(CadConta cadConta, CancellationToken cancellation);

        /// <summary>
        /// Cria um registro.
        /// </summary>
        Task CreateAsync(CadConta cadConta, CancellationToken cancellation);

        /// <summary>
        /// Remove um registro.
        /// </summary>
        Task RemoveAsync(Guid id, CancellationToken cancellation);
    }
}
