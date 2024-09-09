using FinanceApi.Models;

namespace FinanceApi.Repositories.Interfaces
{
    public interface IMovDespesaRepository
    {
        /// <summary>
        /// Retorna os dados para a tela.
        /// </summary>
        Task<List<MovDespesa>> GetAllAsync(CancellationToken cancellation);

        /// <summary>
        /// Retorna um dado específico para a tela.
        /// </summary>
        Task<MovDespesa> GetAsync(Guid id, CancellationToken cancellation);

        /// <summary>
        /// Atualiza todos os campos alterados do dado.
        /// </summary>
        Task UpdateAsync(MovDespesa movDespesa, CancellationToken cancellation);

        /// <summary>
        /// Cria um registro.
        /// </summary>
        Task CreateAsync(MovDespesa movDespesa, CancellationToken cancellation);

        /// <summary>
        /// Remove um registro.
        /// </summary>
        Task RemoveAsync(Guid id, CancellationToken cancellation);
    }
}
