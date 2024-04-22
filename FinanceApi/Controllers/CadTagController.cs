using FinanceApi.Models;
using FinanceApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FinanceApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CadTagController : ControllerBase
    {
        private readonly CadTagService _cadTagService;

        public CadTagController(CadTagService cadTagService)
        {
            _cadTagService = cadTagService;
        }

        [HttpGet]
        public async Task<ActionResult<List<CadTag>>> Get() =>
            await _cadTagService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<CadTag>> Get(string id)
        {
            var tag = await _cadTagService.GetAsync(id);
            return tag;
        }

        [HttpPost]
        public async Task Post(CadTag newCadTag)
        {
            await _cadTagService.CreateAsync(newCadTag);
        }
      
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, CadTag updateCadTag)
        {
            var tag = await _cadTagService.GetAsync(id);

            if (tag == null) { return NoContent(); }
            
            updateCadTag.Id = tag.Id;

            await _cadTagService.UpdateAsync(id, updateCadTag);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var tag = await _cadTagService.GetAsync(id);
            await _cadTagService.RemoveAsync(id);
            return NoContent();
        }
    }
}
