using FinanceApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.MovDespesa
{
    [ApiController]
    [Route("api/despesa")]
    public class MovDespesaController : ControllerBase
    {
        private readonly IMovDespesaRepository _repository;
        private readonly ICadTagRepository _tagRepository;
        private readonly ICadContaRepository _contaRepository;

        public MovDespesaController(IMovDespesaRepository repository, ICadTagRepository tagRepository, ICadContaRepository contaRepository)
        {
            _repository = repository;
            _tagRepository = tagRepository;
            _contaRepository = contaRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var movDespesa = await _repository.GetAllAsync(cancellation);
            return Ok(movDespesa);
        }

        [HttpGet, Route("{id}")]
        public async Task<IActionResult> GetAsync(Guid id, CancellationToken cancellation)
        {
            var movDespesa = await _repository.GetAsync(id, cancellation);
            return Ok(movDespesa);
        }

        [HttpPost, Route("create")]
        public async Task<IActionResult> PostAsync(MovDespesaViewModel viewModel, CancellationToken cancellation)
        {
            Models.CadTag? cadTag = null;
            Models.CadConta? cadConta = null;

            if (viewModel.Tag != null && viewModel.Tag.Value != Guid.Empty)
            {
                cadTag = await _tagRepository.GetAsync(viewModel.Tag.Value, cancellation);
            }

            if (viewModel.Conta != null && viewModel.Conta.Value != Guid.Empty)
            {
                cadConta = await _contaRepository.GetAsync(viewModel.Conta.Value, cancellation);
                cadConta.SubtrairSaldo(viewModel.Valor);
                await _contaRepository.UpdateAsync(cadConta, cancellation);
            }

            var movDespesa = new Models.MovDespesa(viewModel.Descricao,
                viewModel.Valor,
                viewModel.DataLancamento,
                cadConta: cadConta,
                cadTag: cadTag);

            await _repository.InsertAsync(movDespesa, cancellation);
            return Ok(new { Message = "Despesa criada com sucesso." });
        }

        [HttpPut, Route("update/{id}")]
        public async Task<IActionResult> UpdateAsync(Guid id, MovDespesaViewModel viewModel, CancellationToken cancellation)
        {
            var movDespesa = await _repository.GetAsync(viewModel.Id.Value, cancellation);

            Models.CadTag? cadTag = null;
            Models.CadConta? cadConta = null;

            if (viewModel.Tag != null && viewModel.Tag.Value != Guid.Empty)
            {
                cadTag = await _tagRepository.GetAsync(viewModel.Tag.Value, cancellation);
            }

            if (viewModel.Conta != null && viewModel.Conta.Value != Guid.Empty)
            {
                cadConta = await _contaRepository.GetAsync(viewModel.Conta.Value, cancellation);
            }

            movDespesa.Update(viewModel.Descricao,
                viewModel.Valor,
                viewModel.DataLancamento,
                cadConta: cadConta,
                cadTag: cadTag);

            await _repository.UpdateAsync(movDespesa, cancellation);

            return Ok(new { Message = "Despesa atualizada com sucesso." });
        }

        [HttpDelete, Route("delete/{id}")]
        public async Task<IActionResult> RemoveAsync(Guid id, CancellationToken cancellation)
        {
            _repository.RemoveAsync(id, cancellation);
            return Ok(new { Message = "Despesa removida com sucesso." });
        }
    }
}
