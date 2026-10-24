# Representation collapse
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Representational collapse  

## State of the Field

**Definition agreement:** Conflicting. Most papers define representation collapse as internal representations becoming overly similar or nearly identical across later layers or across distinct inputs, reducing the model's ability to distinguish cases. One paper instead defines it as the degradation of pre-trained representations during fine-tuning, which is a different training-time phenomenon rather than similarity among representations, so the papers are not all studying the same thing.

**Space of definitions.** Across the papers, representation collapse is commonly treated as a loss of distinctiveness in a model's representations, though the papers place that loss at different points in the model and training process. Some definitions frame it as the distortion and degradation of general, pre-trained feature representations during fine-tuning on a downstream task, while others define it as hidden states in deeper or intermediate layers becoming highly similar and thereby less expressive. Another framing describes distinct input sequences yielding arbitrarily close final-token representations, making them indistinguishable to the model, especially with low-precision arithmetic.

**Space of facets.** Papers situate the construct through nearby terms and properties. One paper explicitly refers to the phenomenon as the "over-smoothing" problem, another ties it to diminishing internal representation diversity, and the layer-based definitions describe it as later-layer or intermediate-layer collapse that reduces effective depth, expressive capacity, or the ability to represent diverse features. The naming also varies slightly, with both "representation collapse" and "representational collapse" used.

**Space of measurement.** No measurement instrument is linked to it, and the only linked behavioral indicator overall is Token copying, via a causal claim rather than a measured_by link. When papers operationalize the construct directly, they do so through analyses of representation similarity: one paper says it is quantified through cosine similarity between the inputs of adjacent layers, while another defines collapse by distinct sequences whose final-token representations become arbitrarily close as sequence length increases. These operationalizations line up most clearly with the similarity-based definitions, while the fine-tuning-based definition is not paired with a linked instrument.

**Links.** Across reported relationships, it is linked to 4 constructs and 1 behavioral indicator. Individual papers claim causal relationships from representation collapse to Token copying, describing errors in copying tasks when the model cannot respond differently to certain sequences, to Expressive power, describing reduced ability to represent diverse features, and to Mathematical reasoning, describing collapse in intermediate layers as limiting reasoning capabilities. In the other direction, one paper claims a causal relationship from Token diversity to representation collapse, saying better token diversity can slow the collapse phenomenon, and one paper reports that representation collapse is related to Representation diversity because collapse occurs when internal representation diversity diminishes.

## Sources

**[LiNeS: Post-training Layer Scaling Prevents Forgetting and Enhances Model Merging](https://proceedings.iclr.cc/paper_files/paper/2025/file/43ae0b566b802b2d00e525b672794b82-Paper-Conference.pdf)**
> The distortion and degradation of general, pre-trained feature representations within a model during the process of fine-tuning on a specific downstream task.

**[Transformers need glasses! Information over-squashing in language tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1d35561c4a4a0e0b6012b2af531e149-Paper-Conference.pdf) (as "Representational collapse")**
> A phenomenon where distinct input sequences produce arbitrarily close final-token representations, making them indistinguishable to the model, especially with low-precision arithmetic.

## Relationships

### Representation collapse →
- **Token copying** (behaviors tasks) — *causes*
  > As a result, the model is provably unable to respond to these sequences in different ways—leading to errors in, e.g., tasks involving counting or copying. (Abstract)
  - [Transformers need glasses! Information over-squashing in language tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1d35561c4a4a0e0b6012b2af531e149-Paper-Conference.pdf)
- **Expressive power** (constructs) — *causes*
  > This phenomenon, often referred to as the “over-smoothing” problem, substantially reduces the transformers’ ability to represent diverse features (Section 1).
  - [Transformer Meets Twicing: Harnessing Unattended Residual Information](https://proceedings.iclr.cc/paper_files/paper/2025/file/90cdfb6ac8d9f96bdf0ce92f5f05c391-Paper-Conference.pdf)
- **Reasoning** (constructs) — *causes*
  > "representation collapse in the model’s intermediate layers as a key factor limiting their reasoning capabilities"
  - [Seq-VCR: Preventing  Collapse in Intermediate Transformer Representations for Enhanced Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/b577c062bd4f894b7e05fab6440373ed-Paper-Conference.pdf)

### → Representation collapse
- **Representation diversity** (constructs) — *causes*
  > We empirically demonstrate in Figure 1 that Twicing Attention mechanism promotes better token diversity and, therefore, it is able to slow down representation collapse phenomenon in transformers. (Section 5).
  - [Transformer Meets Twicing: Harnessing Unattended Residual Information](https://proceedings.iclr.cc/paper_files/paper/2025/file/90cdfb6ac8d9f96bdf0ce92f5f05c391-Paper-Conference.pdf)
