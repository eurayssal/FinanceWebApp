using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace FinanceApi.Models
{
    public class CadConta : BaseModel
    {
        public string? Nome { get; set; }

        public double Saldo { get; set; }
        public bool Atividade { get; set; }
    }
}
