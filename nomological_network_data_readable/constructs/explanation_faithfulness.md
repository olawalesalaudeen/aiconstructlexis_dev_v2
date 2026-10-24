# Explanation faithfulness
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Causal faithfulness  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the available definitions, papers split between two framings rather than converging on one. One usage, named causal faithfulness, defines it as whether a feature's interpretation matches its causal role in the model's computation and describes features as interpretable in a way "consistent with their causal role"; another defines explanation faithfulness as the degree to which a textual explanation accurately and reliably describes the behavior of a specific neural network unit, with emphasis on explanations being reliable and truthful. The disagreement is over both the object being evaluated, feature interpretations versus textual explanations of units, and the reference standard, causal role in computation versus accurate description of unit behavior.

**Space of facets.** Papers do not break the construct into a shared set of facets, but they do use nearby labels for different targets. The label causal faithfulness is used for feature interpretations, while explanation faithfulness is used for textual explanations of units such as neurons, and the latter is described in terms of reliability, truthfulness, and trustworthiness.

**Space of measurement.** Operationalization is sparse. Papers link the construct to 1 measurement instrument, BLiMP, and to no behavioral indicators. The only recorded measurement use says that selected text generation datasets were used to "compare the explanation faithfulness," with BLiMP as the linked instrument; relative to the definitions, this records a dataset-based comparison but not a direct procedure tied to causal role or to the reliability of textual unit explanations.

## Sources

**[Towards Principled Evaluations of Sparse Autoencoders for Interpretability and Control](https://proceedings.iclr.cc/paper_files/paper/2025/file/53356aebeea8ffd40a8ac3bb66243162-Paper-Conference.pdf) (as "Causal faithfulness")**
> The extent to which a feature's interpretation matches its causal role in the model's computation.

**[Evaluating Neuron Explanations: A Unified Framework with Sanity Checks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/oikarinen25a/oikarinen25a.pdf)**
> The degree to which a textual explanation accurately and reliably describes the behavior of a specific neural network unit, such as a neuron.
