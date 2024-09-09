namespace FinanceApi.ViewModels
{
    public class AutocompleteResponseOption<TValue> : BaseAutocompleteResponseOption<TValue>
    {
    }

    public class AutocompleteResponseOption : BaseAutocompleteResponseOption<Guid>
    {
    }

    public abstract class BaseAutocompleteResponseOption<TValue>
    {
        public TValue Value { get; set; }
        public string Text { get; set; }
    }
}
