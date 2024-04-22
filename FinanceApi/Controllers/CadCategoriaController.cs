using FinanceApi.Models;
using FinanceApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CadCategoriaController : ControllerBase
    {
        private readonly CadCategoriaService _cadCategoriaService;

        public CadCategoriaController(CadCategoriaService cadCategoriaService)
        {
            _cadCategoriaService = cadCategoriaService;
        }

        [HttpGet]
        public async Task<ActionResult<List<CadCategoria>>> Get()
        {
            var categoria = await _cadCategoriaService.GetAsync();
            return Ok(categoria);
        }

        [HttpPost]
        public async Task<ActionResult<List<CadCategoria>>> Post(CadCategoria newCadCategoria)
        {
            await _cadCategoriaService.CreateAsync(newCadCategoria);
            return CreatedAtAction(nameof(Get), new { id = newCadCategoria.Id }, newCadCategoria);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, CadCategoria updateCadCategoria)
        {
            var cadCategoria = await _cadCategoriaService.GetAsync(id);

            if (cadCategoria == null) { return NoContent(); }

            updateCadCategoria.Id = cadCategoria.Id;

            await _cadCategoriaService.UpdateAsync(id, updateCadCategoria);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var cadCategoria = await _cadCategoriaService.GetAsync(id);
            await _cadCategoriaService.RemoveAsync(id);
            return NoContent();
        }
    }
}
