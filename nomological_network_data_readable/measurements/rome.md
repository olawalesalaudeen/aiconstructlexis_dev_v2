# ROME
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

Across the provided sources, ROME (Rank-One Model Editing) is consistently characterized as a knowledge-editing method for altering factual associations in language models. The prevailing description of its mechanism is that it modifies a model's MLP weights, with one paper noting it "only modifies MLP weights." This modification is specified as an "analytic rank-one update," and some sources add that this process is preceded by a "causal-tracing analysis" to identify the layer where the knowledge is stored. A common framing is that ROME works by altering "key-value memory-like patterns" to change a model's factual recall for a given subject. One paper provides a more detailed operational view, describing the algorithm as taking a subject vector and a new object vector to induce the model to predict a new fact. The provided data also includes a critique of the method, with one study observing that "ROME does not generalise well" under criteria like bijective symmetry and synonymous invariance.

## Sources

**[Is This the Subspace You Are Looking for? An Interpretability Illusion for Subspace Activation Patching](https://proceedings.iclr.cc/paper_files/paper/2024/file/70b8505ac79e3e131756f793cd80eb8d-Paper-Conference.pdf)**
> Rank-One Model Editing, a method that modifies MLP weights to edit factual associations in language models by altering key-value memory-like patterns.
