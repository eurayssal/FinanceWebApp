using FinanceApi.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Controllers.MovDespesa
{
    public class MovDespesaViewModel : BaseViewModel
    {
        [Required(ErrorMessage = "A Descrição é obrigatória.")]
        public string Descricao { get; set; }

        [Required(ErrorMessage = "Valor é obrigatório.")]
        public decimal Valor { get; set; }
        public DateTime DataLancamento { get; set; }
        public AutocompleteResponseOption<Guid>? Tag { get; set; }
        public AutocompleteResponseOption<Guid>? Conta { get; set; }
    }
}
