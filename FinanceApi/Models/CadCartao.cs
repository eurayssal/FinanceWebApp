using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FinanceApi.Models
{
    public class CadCartao : BaseModel
    {
        public string? Nome { get; set; }
        public int DiaFechamento { get; set; }
        public int DiaVencimento { get; set; }
    }
}
