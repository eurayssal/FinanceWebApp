using FinanceApi.Repositories.Interfaces;
using FinanceApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers.CadDespesa
{
    [ApiController]
    [Route("despesa")]
    public class HomeController : ControllerBase
    {
        private readonly ICadDespesaRepository _repository;

        public HomeController(ICadDespesaRepository repository)
        {
            _repository = repository;
        }

        [HttpPost, Route("create")]
        public async Task<IActionResult> PostAsync([FromBody] CadDespesaViewModel viewModel, CancellationToken cancellation)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            Models.CadTag tag = null;

            var cadDespesa = new Models.CadDespesa(viewModel.Descricao, viewModel.Valor);
            await _repository.InsertAsync(cadDespesa, cancellation);

            return Ok(new { Message = "Despesa criada com sucesso.", CadDespesa = cadDespesa });
        }

        [HttpGet, Route("getAll")]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var cadDespesas = await _repository.GetAllAsync(cancellation);
            return Ok(cadDespesas);
        }

        [HttpPut, Route("update/{id}")]
        public async Task<IActionResult> UpdateAsync(Guid id, [FromBody] CadDespesaViewModel viewModel, CancellationToken cancellation)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var existingCadDespesa = await _repository.GetAsync(id, cancellation);

            if (existingCadDespesa == null)
                return NotFound();

            existingCadDespesa.Descricao = viewModel.Descricao;
            existingCadDespesa.Valor = viewModel.Valor;

            await _repository.UpdateAsync(existingCadDespesa, cancellation);
            return Ok(new { Message = "Despesa atualizada com sucesso.", CadDespesa = existingCadDespesa });
        }

        [HttpDelete, Route("delete/{id}")]
        public async Task<IActionResult> DeleteAsync(Guid id, CancellationToken cancellation)
        {
            var existingCadDespesa = await _repository.GetAsync(id, cancellation);

            if (existingCadDespesa == null)
                return NotFound();

            await _repository.DeleteAsync(id, cancellation);

            return Ok(new { Message = "Despesa deletada com sucesso." });
        }
    }
}
