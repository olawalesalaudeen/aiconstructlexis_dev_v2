# Representativeness
**Type:** Construct  
**Referenced in:** 3 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** The available usage treats representativeness as a subset-to-dataset property: in Large Language Models are Demonstration Pre-Selectors for Themselves, it is defined as the degree to which a subset of training data captures the essential information needed for a model to perform well across tasks, with both sufficiency and necessity relative to the full dataset. The same source consistently frames it as finding a "core subset" of "the most representative examples" and as a "faithful representation" of the training dataset, while also pairing that goal with keeping the subset minimal in size.

**Space of facets.** The only explicit internal breakdown treats representativeness through two criteria, sufficiency and necessity with respect to the full dataset. The same usage also couples representativeness with a separate minimality objective, describing a high-quality subset as both representative of the whole training set and "as minimal in size as possible."

**Space of measurement.** Operationalization is sparse: papers link representativeness to 1 measurement instrument, OpinionQA, and to no behavioral indicators. In PersonalLLM: Tailoring LLMs to Individual Preferences, it is measured through a "representativeness score" of an opinion distribution produced by simulated preference models; this wording differs from the available definition, which is stated in terms of training-data subsets relative to the full dataset.

## Sources

**[Large Language Models are Demonstration Pre-Selectors for Themselves](https://raw.githubusercontent.com/mlresearch/v267/main/assets/jin25i/jin25i.pdf)**
> The degree to which a subset of training data captures the essential information needed for a model to perform well across tasks, reflecting both sufficiency and necessity with respect to the full dataset.
