using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace FinanceApi.Models
{
    public class CadConta
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string Nome { get; set; }

        public double Saldo { get; set; }
        public bool Atividade { get; set; }
    }
}
