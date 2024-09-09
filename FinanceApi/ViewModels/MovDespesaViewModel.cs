using FinanceApi.Models;
using System.ComponentModel.DataAnnotations;

namespace FinanceApi.ViewModels
{
    public class MovDespesaViewModel : BaseModel
    {
        public string Descricao { get; set; }
        [Required(ErrorMessage = "O Valor é obrigatório.")]
        public decimal Valor { get; set; }
    }
}
