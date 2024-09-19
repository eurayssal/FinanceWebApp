using FinanceApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.MovReceita
{
    [ApiController]
    [Route("api/receita")]
    public class MovReceitaController : ControllerBase
    {
        private readonly IMovReceitaRepository _repository;
        private readonly ICadTagRepository _tagRepository;
        private readonly ICadContaRepository _contaRepository;

        public MovReceitaController(IMovReceitaRepository repository, ICadTagRepository cadTagRepository, ICadContaRepository contaRepository)
        {
            _repository = repository;
            _tagRepository = cadTagRepository;
            _contaRepository = contaRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var movReceita = await _repository.GetAllAsync(cancellation);
            return Ok(movReceita);
        }


        [HttpGet, Route("{id}")]
        public async Task<IActionResult> GetAsync(Guid id, CancellationToken cancellation)
        {
            var movReceita = await _repository.GetAllAsync(cancellation);
            return Ok(movReceita);
        }

        [HttpPost, Route("create")]
        public async Task<IActionResult> PostAsync(MovReceitaViewModel viewModel, CancellationToken cancellation)
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
                cadConta.SomarSaldo(viewModel.Valor);
                await _contaRepository.UpdateAsync(cadConta, cancellation);
            }

            var movReceita = new Models.MovReceita(viewModel.Descricao,
                viewModel.Valor,
                viewModel.DataLancamento,
                cadConta: cadConta,
            cadTag: cadTag);

            await _repository.InsertAsync(movReceita, cancellation);
            return Ok(new { Message = "Despesa criada com sucesso." });
        }

        [HttpPut, Route("update/{id}")]
        public async Task<IActionResult> UpdateAsync(Guid id, MovReceitaViewModel viewModel, CancellationToken cancellation)
        {
            Models.CadTag? cadTag = null;
            Models.CadConta? cadConta = null;

            var movReceita = await _repository.GetAsync(viewModel.Tag.Value, cancellation);

            if (viewModel.Tag != null && viewModel.Tag.Value != Guid.Empty)
            {
                cadTag = await _tagRepository.GetAsync(viewModel.Tag.Value, cancellation);
            }

            if (viewModel.Tag != null && viewModel.Tag.Value != Guid.Empty)
            {
                cadConta = await _contaRepository.GetAsync(viewModel.Conta.Value, cancellation);
            }

            movReceita.Update(viewModel.Descricao,
                viewModel.Valor,
                viewModel.DataLancamento,
                cadTag: cadTag,
                cadConta: cadConta);

            await _repository.UpdateAsync(movReceita, cancellation);

            return Ok(new { Message = "Receita atualizada com sucesso." });
        }

        [HttpDelete, Route("delete/{id}")]
        public async Task<IActionResult> RemoveAsync(Guid id, CancellationToken cancellation)
        {
            _repository.RemoveAsync(id, cancellation);
            return Ok(new { Message = "Receita removida com sucesso." });
        }
    }
}
