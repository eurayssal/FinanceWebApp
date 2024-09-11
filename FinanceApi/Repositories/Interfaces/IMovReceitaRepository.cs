using FinanceApi.Models;

namespace FinanceApi.Repositories.Interfaces
{
    public interface IMovReceitaRepository
    {
        /// <summary>
        /// Retorna os dados para a tela.
        /// </summary>
        Task<List<MovReceita>> GetAllAsync(CancellationToken cancellation);

        /// <summary>
        /// Retorna um dado específico para a tela.
        /// </summary>
        Task<MovReceita> GetByIdAsync(Guid id, CancellationToken cancellation);

        /// <summary>
        /// Atualiza todos os campos alterados do dado.
        /// </summary>
        Task UpdateAsync(MovReceita movReceita, CancellationToken cancellation);

        /// <summary>
        /// Cria um registro.
        /// </summary>
        Task CreateAsync(MovReceita movReceita, CancellationToken cancellation);

        /// <summary>
        /// Remove um registro.
        /// </summary>
        Task RemoveAsync(Guid id, CancellationToken cancellation);
    }
}
