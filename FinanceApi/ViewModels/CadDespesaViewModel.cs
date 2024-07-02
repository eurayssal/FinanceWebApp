using FinanceApi.Models;
using System.ComponentModel.DataAnnotations;

namespace FinanceApi.ViewModels
{
    public class CadDespesaViewModel : BaseModel
    {
        [Required(ErrorMessage = "A Descrição é obrigatória.")]
        public string Descricao { get; set; }
        [Required(ErrorMessage = "O Valor é obrigatório.")]
        public decimal Valor { get; set; }
    }
}
