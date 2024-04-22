using FinanceApi.Models;
using FinanceApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CadCartaoController : ControllerBase
    {
        private readonly CadCartaoService _cadCartaoService;

        public CadCartaoController(CadCartaoService cadCartaoService)
        {
            _cadCartaoService = cadCartaoService;
        }

        [HttpGet]
        public async Task<ActionResult<List<CadCartao>>> Get()
        {
            var cartao = await _cadCartaoService.GetAsync();
            return Ok(cartao);
        }

        [HttpPost]
        public async Task<ActionResult<List<CadCartao>>> Post(CadCartao newCadCartao)
        {
            await _cadCartaoService.CreateAsync(newCadCartao);
            return CreatedAtAction(nameof(Get), new { id = newCadCartao.Id }, newCadCartao);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, CadCartao updateCadCartao)
        {
            var cadCartao = await _cadCartaoService.GetAsync(id);

            if (cadCartao == null) { return NoContent(); }

            updateCadCartao.Id = cadCartao.Id;

            await _cadCartaoService.UpdateAsync(id, updateCadCartao);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var cartao = await _cadCartaoService.GetAsync(id);
            await _cadCartaoService.RemoveAsync(id);
            return NoContent();
        }
    }
}
