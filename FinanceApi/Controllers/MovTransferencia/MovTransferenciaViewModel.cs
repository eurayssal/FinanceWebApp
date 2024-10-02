using FinanceApi.ViewModels;

namespace FinanceApi.Controllers.MovTransferencia
{
    public class MovTransferenciaViewModel : BaseViewModel
    {
        public string Descricao { get; set; }
        public decimal Valor { get; set; }
        public string Observacao { get; set; }
        public DateTime DataTransferencia { get; set; }
        public AutocompleteResponseOption<Guid>? ContaSaida { get; set; }
        public AutocompleteResponseOption<Guid>? ContaEntrada { get; set; }
    }
}
