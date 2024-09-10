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

        public MovDespesaController(IMovDespesaRepository repository, ICadTagRepository tagRepository)
        {
            _repository = repository;
            _tagRepository = tagRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var cadTags = await _repository.GetAllAsync(cancellation);
            return Ok(cadTags);
        }

        [HttpGet, Route("{id}")]
        public async Task<IActionResult> GetAsync(Guid id, CancellationToken cancellation)
        {
            var cadTags = await _repository.GetByIdAsync(id, cancellation);
            return Ok(cadTags);
        }

        [HttpPost, Route("create")]
        public async Task<IActionResult> PostAsync(MovDespesaViewModel viewModel, CancellationToken cancellation)
        {
            Models.CadTag? cadTag = null;
            if (viewModel.Tag != null && viewModel.Tag.Value != Guid.Empty)
            {
                cadTag = await _tagRepository.GetByIdAsync(viewModel.Tag.Value, cancellation);
            }
            var movDespesa = new Models.MovDespesa(viewModel.Descricao,
                viewModel.Valor,
                viewModel.IsPago,
                cadTag: cadTag);

            await _repository.CreateAsync(movDespesa: movDespesa, cancellation);
            return Ok(new { Message = "Despesa criada com sucesso." });
        }

        [HttpPut, Route("update/{id}")]
        public async Task<IActionResult> UpdateAsync(Guid id, MovDespesaViewModel viewModel, CancellationToken cancellation)
        {
            var movDespesa = await _repository.GetByIdAsync(viewModel.Id.Value, cancellation);

            Models.CadTag? cadTag = null;
            if (viewModel.Tag != null && viewModel.Tag.Value != Guid.Empty)
            {
                cadTag = await _tagRepository.GetByIdAsync(viewModel.Tag.Value, cancellation);
            }


            movDespesa.Update(descricao: viewModel.Descricao,
            valor: viewModel.Valor,
            isPago: viewModel.IsPago,
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

        //[HttpPut, Route("update/{id}")]
        //public async Task<IActionResult> UpdateAsync([FromBody] ViewModel viewModel, CancellationToken cancellation)
        //{
        //    if (!ModelState.IsValid)
        //        return BadRequest(ModelState);

        //    var cadTag = await _repository.GetAsync(viewModel.Id.Value, cancellation);

        //    cadTag.Update(nome: viewModel.Nome);

        //    if (cadTag == null)
        //        return NotFound();

        //    await _repository.UpdateAsync(cadTag, cancellation);
        //    return Ok(new { Message = "Tag atualizada com sucesso.", CadTag = cadTag });
        //}
    }
}
