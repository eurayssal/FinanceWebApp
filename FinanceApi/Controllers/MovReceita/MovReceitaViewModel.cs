using FinanceApi.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Controllers.MovReceita
{
    public class MovReceitaViewModel : BaseViewModel
    {
        [Required(ErrorMessage = "A Descrição é obrigatória.")]
        public string Descricao { get; set; }
        public decimal Valor { get; set; }
        public DateTime DataLancamento { get; set; }
        public AutocompleteResponseOption<Guid>? Conta { get; set; }
        public AutocompleteResponseOption<Guid>? Tag { get; set; }
    }
}
