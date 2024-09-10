using FinanceApi.Models;

namespace FinanceApi.Repositories.Interfaces
{
    public interface ICadTagRepository
    {
        /// <summary>
        /// Retorna os dados para a tela.
        /// </summary>
        Task<List<CadTag>> GetAllAsync(CancellationToken cancellation);

        /// <summary>
        /// Retorna um dado específico para a tela.
        /// </summary>
        Task<CadTag> GetByIdAsync(Guid id, CancellationToken cancellation);

        /// <summary>
        /// Atualiza todos os campos alterados do dado.
        /// </summary>
        Task UpdateAsync(CadTag cadTag, CancellationToken cancellation);

        /// <summary>
        /// Cria um registro.
        /// </summary>
        Task CreateAsync(CadTag cadTag, CancellationToken cancellation);

        /// <summary>
        /// Remove um registro.
        /// </summary>
        Task RemoveAsync(Guid id, CancellationToken cancellation);
    }
}
