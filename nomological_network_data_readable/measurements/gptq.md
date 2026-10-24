# GPTQ
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

Across the provided literature, GPTQ is consistently defined as a post-training quantization procedure or method. It is operationalized to quantize model checkpoints, with papers specifying its use for 4-bit quantization. The procedure is employed for evaluation, such as assessing "quantization gap and compressed complexity." In this capacity, GPTQ is used to measure the construct of Quantizability, though one paper observes that the effect of model size on this property is "not very pronounced with the GPTQ algorithm." Some work also positions GPTQ as a "contrastive baseline" alongside other methods like AWQ and SmoothQuant. One such study characterizes it as a method that "does not specifically protect massive values," which reportedly leads to "significant performance degradation" in their context.

## Sources

**[Compute-Optimal LLMs Provably Generalize Better with Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/4a13396b4c8a90e01dac61d2b0559ef7-Paper-Conference.pdf)**
> GPTQ is a post-training quantization procedure used here to quantize model checkpoints for evaluating quantization gap and compressed complexity.

## Relationships

### → GPTQ
- **Quantization robustness** (constructs) — *measured_by*
  > We compute these quantities on the given Pythia checkpoints on the Pile dataset on which they were trained and quantized using GPTQ (Frantar et al., 2023) to b = 4 bits per parameter (Section 4)
  - [Compute-Optimal LLMs Provably Generalize Better with Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/4a13396b4c8a90e01dac61d2b0559ef7-Paper-Conference.pdf)
