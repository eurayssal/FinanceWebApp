namespace FinanceApi.Models
{
    public class CadDespesa : BaseModel
    {
        public CadDespesa(string descricao, decimal valor)
        {
            Descricao = descricao;
            Valor = valor;
        }
        public string Descricao { get; set; }
        public decimal Valor { get; set; }
    }
}
