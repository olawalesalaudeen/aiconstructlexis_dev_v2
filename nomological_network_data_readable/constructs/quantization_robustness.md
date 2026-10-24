# Quantization robustness
**Type:** Construct  
**Referenced in:** 14 papers  
**Also known as:** Quantization sensitivity, Error resilience, Quantizability  

## State of the Field

**Definition agreement:** Consensus. Most papers define quantization robustness as a model's ability to maintain performance when weights, activations, or parameters are represented at lower numerical precision, often across different or very low bit-widths. A few definitions shift the emphasis to component sensitivity or output stability under quantized computation, but they still point to the same core phenomenon of resistance to degradation from quantization rather than a different construct.

**Space of definitions.** Across definitions, the prevailing usage treats quantization robustness as maintaining model performance when weights and activations are represented at low precision, often emphasizing very low bit-widths such as 4-bit or performance across varying bit settings. These papers describe it as resilience to precision reduction in weights and activations under low-bit quantization. A smaller line of work instead frames the construct as component-level quantization sensitivity, as output stability when computations are approximated or quantized, or as quantizability, a property that allows lower-precision parameters while maintaining performance and is described as indicating lower effective complexity.

**Space of facets.** Papers break the construct down mainly by the level at which robustness is located. Most definitions are whole-model, asking whether performance is preserved across low-bit or any-bit quantization configurations; other definitions move to variation across linear blocks and experts, to distinct resilience in prefill versus decoding phases, or to a model property of being more quantizable at a given performance level. The terminology is correspondingly mixed: quantization robustness is the prevailing name, while quantization sensitivity, error resilience, and quantizability are used for alternative formulations.

**Space of measurement.** The measurement space is sparse: papers link the construct to 2 measurement instruments, C4 and WikiText-2, and to no behavioral indicators. The explicit reported use is perplexity of a quantized LLaMA-7B model on WikiText-2, and the same paper also measures it with C4. This operationalization stays close to the dominant definition by treating robustness as retained performance after quantization.

**Links.** Papers report no causal, correlational, or other related links involving this construct. The only recorded relations are the measurement links to C4 and WikiText-2.

## Sources

**[OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c6483c8a68083af3383f91ee0dc6db95-Paper-Conference.pdf)**
> The degree to which a model maintains performance when weights and activations are represented in low-precision formats, particularly under extreme conditions like 4-bit quantization.

**[MxMoE: Mixed-precision Quantization for MoE with Accuracy and Performance Co-Design](https://raw.githubusercontent.com/mlresearch/v267/main/assets/duanmu25a/duanmu25a.pdf) (as "Quantization sensitivity")**
> The degree to which different components of a model are affected by reduced numerical precision, influencing the accuracy loss when quantized.

**[Progressive Mixed-Precision Decoding for Efficient LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df4313ecd4875931fbdacc486cc1fcf-Paper-Conference.pdf) (as "Error resilience")**
> The degree to which an LLM's outputs remain stable when its computations are approximated or quantized.

**[Compute-Optimal LLMs Provably Generalize Better with Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/4a13396b4c8a90e01dac61d2b0559ef7-Paper-Conference.pdf) (as "Quantizability")**
> The property of a model that allows its parameters to be represented with lower numerical precision while maintaining performance, indicating lower effective complexity.

## Relationships

### Quantization robustness →
- **GPTQ** (measurements) — *measured_by*
  > We compute these quantities on the given Pythia checkpoints on the Pile dataset on which they were trained and quantized using GPTQ (Frantar et al., 2023) to b = 4 bits per parameter (Section 4)
  - [Compute-Optimal LLMs Provably Generalize Better with Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/4a13396b4c8a90e01dac61d2b0559ef7-Paper-Conference.pdf)
