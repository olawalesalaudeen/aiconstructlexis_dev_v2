# Parameter sensitivity
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Progressive sensitivity, Weight sensitivity  

## State of the Field

**Definition agreement:** Complementary. Most papers define parameter sensitivity as how changes or perturbations to parameters affect the model, such as loss or optimization progress, output distortion, prediction accuracy, or forgetting of pre-trained knowledge. These definitions are complementary because they study the same basic phenomenon from different angles, while one paper instead defines it as how much the parameters themselves change in response to training data.

**Space of definitions.** Most commonly, papers treat parameter sensitivity as the extent to which parameter or weight changes matter, whether through disproportionate contribution to optimization progress or loss change during fine-tuning, through the degree to which parameters change in response to training data, or through the effect of perturbing specific weights on output distortion and final prediction accuracy. A smaller line of work broadens the notion into "progressive sensitivity", the tendency for equally sized parameter modifications, including fine-tuning or noise, to produce larger perplexity changes and greater forgetting as pre-training length increases. Across these definitions, papers agree on responsiveness to parameter modification, but differ on whether the construct is about which individual parameters matter most, how much parameters move during training, or how model behavior shifts under perturbation, and on whether it is framed as a fine-tuning property or as something that increases with longer pre-training.

**Space of facets.** Papers use several adjacent labels rather than a single shared taxonomy. One recurrent view isolates a sparse subset of sensitive parameters, identified by maximized FO coordinate-wise gradient square values or top-k entries from the diagonal of the empirical Fisher information matrix, and reports that roughly 0.1%-1% of parameters contribute about 50% of gradient norm square. Other papers distinguish high sensitivity in the initial fine-tuning phase, discussed alongside high Hessian values, from progressive sensitivity across pre-training, and another uses weight sensitivity in compression, where more sensitive weights are re-scaled or kept at original values and allocated more bits.

**Space of measurement.** No measurement instrument is linked to it, and one behavioral indicator is, Catastrophic forgetting, which appears as a causal outcome rather than a measurement device. Papers instead operationalize the construct with analyses: maximized FO coordinate-wise gradient square values, top-k entries from the diagonal of the empirical Fisher information matrix, change in perplexity under fixed-magnitude perturbation or a fixed learning rate, high Hessian values during early fine-tuning, and output distortion and final prediction accuracy under weight perturbation. These operationalizations follow the shared focus on the effects of parameter changes, but they attach that focus to different observables.

**Links.** The only reported link is causal: one paper claims a causal relationship from Parameter sensitivity to Catastrophic forgetting, arguing that a progressive increase during pre-training in sensitivity to parameter transformations leads to greater forgetting of capabilities acquired during pre-training after fine-tuning.

## Sources

**[Zeroth-Order Fine-Tuning of LLMs with Transferable Static Sparsity](https://proceedings.iclr.cc/paper_files/paper/2025/file/266983d0949aed78a16fa4782237dea7-Paper-Conference.pdf)**
> The extent to which particular parameters contribute disproportionately to optimization progress or loss change during fine-tuning.

**[Overtrained Language Models Are Harder to Fine-Tune](https://raw.githubusercontent.com/mlresearch/v267/main/assets/springer25a/springer25a.pdf) (as "Progressive sensitivity")**
> The latent tendency of pre-trained models to become increasingly sensitive to parameter modifications—such as fine-tuning or noise—as the amount of pre-training data increases, leading to greater forgetting of pre-trained knowledge.

**[Radio: Rate–Distortion Optimization for Large Language Model Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/young25b/young25b.pdf) (as "Weight sensitivity")**
> The degree to which perturbations in a model's specific weights affect the overall output distortion and final prediction accuracy.

## Relationships

### Parameter sensitivity →
- **Catastrophic forgetting** (behaviors tasks) — *causes*
  > We argue that catastrophic overtraining arises as a result of a progressive increase throughout pre-training of model sensitivity to parameter transformations, leading to greater forgetting of the capabilities acquired during pre-training after fine-tuning (Section 3). (Figure 1)
  - [Overtrained Language Models Are Harder to Fine-Tune](https://raw.githubusercontent.com/mlresearch/v267/main/assets/springer25a/springer25a.pdf)
