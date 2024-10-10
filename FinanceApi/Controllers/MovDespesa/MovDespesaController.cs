using FinanceApi.Repositories.Interfaces;
using Infraestructure.Controllers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.MovDespesa
{
    [Authorize]
    [ApiController]
    [Route("api/despesa")]
    public class MovDespesaController : BaseController
    {
        private readonly IMovDespesaRepository _repository;
        private readonly ICadTagRepository _tagRepository;
        private readonly ICadContaRepository _contaRepository;
        private readonly ICadCartaoRepository _cartaoRepository;

        public MovDespesaController(IMovDespesaRepository repository, ICadTagRepository tagRepository,
            ICadContaRepository contaRepository, ICadCartaoRepository cartaoRepository)
        {
            _repository = repository;
            _tagRepository = tagRepository;
            _contaRepository = contaRepository;
            _cartaoRepository = cartaoRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var movDespesa = await _repository.GetAllAsync(GetUserId(), cancellation);
            return Ok(movDespesa);
        }

        [HttpGet, Route("{id}")]
        public async Task<IActionResult> GetAsync(Guid id, CancellationToken cancellation)
        {
            var movDespesa = await _repository.GetAsync(id, cancellation);
            return Ok(movDespesa);
        }

        //TODO: Colocar regra de poder lançar uma despesa com cartão ou conta
        [HttpPost, Route("create")]
        public async Task<IActionResult> PostAsync(MovDespesaViewModel viewModel, CancellationToken cancellation)
        {
            Models.CadTag? cadTag = null;
            Models.CadConta? cadConta = null;
            Models.CadCartao? cadCartao = null;

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

            if (viewModel.Cartao != null && viewModel.Cartao.Value != Guid.Empty)
            {
                cadCartao = await _cartaoRepository.GetAsync(viewModel.Cartao.Value, cancellation);
                cadCartao.SomarValorFatura(viewModel.Valor);
                await _cartaoRepository.UpdateAsync(cadCartao, cancellation);
            }

            var movDespesa = new Models.MovDespesa(viewModel.Descricao,
                viewModel.Valor,
                GetUserId(),
                viewModel.DataLancamento,
                cadConta: cadConta,
                cadCartao: cadCartao,
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
