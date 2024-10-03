using FinanceApi.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Controllers.MovTransferencia
{
    public class MovTransferenciaViewModel : BaseViewModel
    {
        [Required(ErrorMessage = "A Descrição é obrigatória.")]
        public string Descricao { get; set; }

        [Required(ErrorMessage = "O valor é obrigatória.")]
        public decimal Valor { get; set; }

        [Required(ErrorMessage = "A observação é obrigatória.")]
        public string Observacao { get; set; }

        [Required(ErrorMessage = "A data de transferencia é obrigatória.")]
        public DateTime DataTransferencia { get; set; }

        [Required(ErrorMessage = "A conta de saida é obrigatória.")]
        public AutocompleteResponseOption<Guid>? ContaSaida { get; set; }

        [Required(ErrorMessage = "A conta de entrada é obrigatória.")]
        public AutocompleteResponseOption<Guid>? ContaEntrada { get; set; }
    }
}
