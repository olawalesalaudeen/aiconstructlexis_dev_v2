# Activation outliers
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** Outlier activations in hidden states  

## State of the Field

**Space of definitions.** Across the papers here, activation outliers are treated as unusually large values in a model's activations, with closely aligned descriptions across sources. One formulation defines them in layer outputs as entries whose absolute value exceeds a threshold based on the mean activation and says they appear in "specific sequence and feature dimensions" (Systematic Outliers in Large Language Models), while a related formulation describes "outlier activations in hidden states" as values in specific feature channels that are "orders of magnitude larger than other values" and present across sequence or token positions.

**Variants.** Papers use closely related names, including "activation outliers" and "outlier activations in hidden states." The phenomenon is studied in layer outputs and down-projection inputs, and also in hidden states after the residual connection, with recurring attention to specific feature channels and to whether the large values recur across sequence position or across all token positions.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the operational descriptions that are given, papers identify it by checking for activation entries whose magnitude is abnormally large relative to other values, including one explicit rule that marks layer-output entries as outliers when |h_i,j| exceeds τ times the mean activation μ_h.

**What it is taken as evidence of.** No construct is linked to it. Across these papers, activation outliers are described as an observable phenomenon, but the reported relationships do not specify any broader construct that it is taken to indicate.

## Sources

**[Systematic Outliers in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e23bee2df5fc72018d9d74d875d7cf3-Paper-Conference.pdf)**
> The observable phenomenon of abnormally large values appearing in the activation tensors of a model, specifically in layer outputs and down-projection inputs.

**[From Attention to Activation: Unraveling the Enigmas of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/556c2ff2ca01492f14f52d079bdc55f3-Paper-Conference.pdf) (as "Outlier activations in hidden states")**
> The occurrence of activation values in specific feature channels of a Transformer's hidden states that are orders of magnitude larger than other values.
