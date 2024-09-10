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

        [HttpPost]
        [Route("create-despesa")]
        public async Task<IActionResult> PostAsync(MovDespesaViewModel viewModel, CancellationToken cancellation)
        {
            Models.CadTag? cadTag = null;
            if (viewModel.Tag != null && viewModel.Tag.Value != Guid.Empty)
            {
                cadTag = await _tagRepository.GetAsync(viewModel.Tag.Value, cancellation);
            }
            var movDespesa = new Models.MovDespesa(viewModel.Descricao,
                viewModel.Valor,
                viewModel.IsPago,
                cadTag: cadTag);

            await _repository.CreateAsync(movDespesa: movDespesa, cancellation);
            return Ok(new { Message = "Tag criada com sucesso." });
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellation)
        {
            var cadTags = await _repository.GetAllAsync(cancellation);
            return Ok(cadTags);
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
