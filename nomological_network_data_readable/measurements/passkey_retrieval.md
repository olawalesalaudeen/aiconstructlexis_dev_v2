# Passkey retrieval
**Type:** Measurement  
**Referenced in:** 18 papers  
**Also known as:** Passkey retrieval task, Passkey Retrieval Task, Passkey Retrieval  

## State of the Field

**What it is.** Across papers, the prevailing usage is a synthetic long-context retrieval task or benchmark in which a model must find and repeat a hidden passkey, usually a random or five-digit code, embedded in long distracting or otherwise meaningless text. Most definitions emphasize random placement or varying depth in the sequence and treat it as a needle-in-haystack test of locating a short target token within a long context. YaRN: Efficient Context Window Extension of Large Language Models describes it as retrieving "a five-digit number" from "a large amount of otherwise meaningless text." A smaller line of work mentions n-digit variants, different difficulty levels, or a contiguous 2K-token Wiki-Text sample.

**What it is claimed to measure.** Papers link this instrument to 2 behavioral indicators and no constructs. The dominant reported use is to measure Synthetic recall, and a smaller line of work reports it as measuring Context retrieval, so the recorded links are concentrated on retrieval behaviors rather than spread across many targets. Definitions and snippets also describe it as evaluating maximum effective context length, long-range dependency modeling, information retention over extended contexts, and, as PoSE: Efficient Context Window Extension of LLMs via Positional Skip-wise Training states, "the maximum distance that a token can attend to during the inference stage."

**Space of uses.** Across papers, it is usually positioned as a benchmark-style synthetic evaluation, with results reported as retrieval accuracy or accuracy on Passkey Retrieval. Some papers include it as one task within broader synthetic long-context or contextual knowledge understanding evaluations, and some vary difficulty by the depth of the hidden code in the sequence. One reported protocol fine-tunes models to retrieve a random 5-digit code hidden at a random location within a contiguous 2K-token Wiki-Text sample. No other measurement instrument is linked to it.

## Sources

**[Hierarchical Context Merging: Better Long Context Understanding for Pre-trained LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/06694da057cb15fef11542270a592627-Paper-Conference.pdf)**
> Task where a model must retrieve a hidden passkey (random number) embedded in long, distracting text; used to evaluate maximum effective context length.

**[MambaExtend: A Training-Free Approach to Improve Long Context Extension of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/f1922bd718528ac3eab114eabbbfa7a0-Paper-Conference.pdf) (as "Passkey retrieval task")**
> A long-context retrieval evaluation in which a hidden 5-digit code must be recovered from within a long input sequence.

**[DeciMamba: Exploring the Length Extrapolation Potential of Mamba](https://proceedings.iclr.cc/paper_files/paper/2025/file/fae0a4535196bf7715c1aef2ccfe283f-Paper-Conference.pdf) (as "Passkey Retrieval Task")**
> A synthetic evaluation protocol designed to test long-context retrieval by requiring a model to find and repeat a random passkey hidden within a long text sample.

**[Fourier Position Embedding: Enhancing Attention’s Periodic Extension for Length Generalization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hua25b/hua25b.pdf) (as "Passkey Retrieval")**
> A needle-in-haystack benchmark that evaluates a model's ability to retrieve a short target token (e.g., a five-digit number) from a long context of distractor text, testing long-range dependency and information retention.

## Relationships

### → Passkey retrieval
- **Synthetic recall** (behaviors tasks) — *measured_by*
  > The passkey retrieval task as defined in Mohtashami and Jaggi (2023) measures a model’s ability to retrieve a simple passkey (i.e., a five-digit number) from amongst a large amount of otherwise meaningless text. (Section 4.3)
  - [YaRN: Efficient Context Window Extension of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/874a4d89f2d04b4bcf9a2c19545cf040-Paper-Conference.pdf)
- **Context retrieval** (behaviors tasks) — *measured_by*
  > Additionally, evaluations on the passkey retrieval task [33, 29] reveal that SSA substantially enhances the retrieval capabilities of the transformer, shown in Table 4.
  - [Selective Attention: Enhancing Transformer through Principled Context Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/14fc4a68da97a3d31eb11c642b0b10fc-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *measured_by*
  > “The task is widely used to evaluate the maximum context length that the model can effectively handle.”
  - [Hierarchical Context Merging: Better Long Context Understanding for Pre-trained LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/06694da057cb15fef11542270a592627-Paper-Conference.pdf)
