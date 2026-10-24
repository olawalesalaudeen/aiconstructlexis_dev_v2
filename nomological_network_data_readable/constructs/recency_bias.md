# Recency bias
**Type:** Construct  
**Referenced in:** 10 papers  
**Also known as:** Recency effect  

## State of the Field

**Definition agreement:** Consensus. All papers define recency bias as a model tendency to overweight the most recently seen tokens relative to earlier context. The differences are only in emphasis on where it appears, such as attention, retrieval, or generated outputs, and in setting, such as long-context or linear-attention models.

**Space of definitions.** Across the surveyed work, the prevailing usage describes recency bias as a preference for more recent tokens over earlier context in attention, retrieval, or subsequent token generation. Most definitions differ mainly in setting: some state it generally as recent tokens being more important, or as closer positions receiving at least as much attention as farther ones when otherwise similar, while others narrow it to long-context or linear-attention cases where attention is concentrated at the tail and earlier or mid-range context is deemphasized. A smaller framing treats it as a serial position effect alongside primacy and analogizes it to human recall patterns, but it still centers on the same recent-over-earlier preference.

**Space of facets.** Papers offer little formal subtype structure, but they repeatedly place the construct within broader temporal and positional patterns. One usage pairs it with primacy under serial position effects, while another equates end-of-input attention sink behavior, or attention concentrated at the tail, with recency bias. Papers also use both recency effect and recency bias for this construct, and one paper relates positional bias to recency bias by contrasting it with lost-in-the-middle.

**Space of measurement.** No measurement instrument is linked to it, and papers link it to 2 behavioral indicators, Synthetic recall and Temporal grounding. Papers instead operationalize it through direct analyses of attention or retrieval patterns: recent tokens are treated as more important for generating the next token, closer positions can be required to receive at least as much attention as farther ones when the compared tokens are otherwise similar, and recency can appear as coverage concentrated on near or final positions rather than earlier context. Across these operationalizations, the observable signal is the relative weighting of recent versus earlier tokens.

**Links.** Among constructs, papers link it to 3 constructs, Long-context understanding, Positional bias, and Robustness, and to 2 behavioral indicators, Synthetic recall and Temporal grounding. One paper claims a causal relationship from recency bias to robustness, describing models with recency bias as more susceptible to perturbations on local tokens and vulnerable to adversarial backdoors; the same paper claims a causal relationship from recency bias to synthetic recall, stating that this bias impairs recall of distant information. Another paper claims a causal relationship from recency bias to long-context understanding when focusing on local tokens becomes detrimental if relevant information lies far back, while separate papers report that recency bias is related to temporal grounding and that positional bias is related to recency bias by framing recency bias as a replacement for lost-in-the-middle.

## Sources

**[Emergence of Episodic Memory in Transformers: Characterizing Changes in Temporal Structure of Attention Scores During Training](https://aclanthology.org/2025.naacl-long.448.pdf) (as "Recency effect")**
> The latent tendency for a model to give greater weight to recently presented tokens when generating subsequent outputs, analogous to human short-term memory recall patterns.

**[Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf)**
> A tendency for attention or retrieval to favor more recent tokens over earlier ones when both are otherwise similar.

## Relationships

### Recency bias →
- **Robustness** (constructs) — *causes*
  > Furthermore, we raise a novel robustness concern regarding SSMs with recency bias: our empirical outcomes show that Mamba is more susceptible to perturbations on local tokens, making it vulnerable to adversarial attack, as these local tokens can be easily manipulated to serve as backdoors. (Section 1)
  - [Understanding and Mitigating Bottlenecks of State Space Models through the Lens of Recency and Over-smoothing](https://proceedings.iclr.cc/paper_files/paper/2025/file/ccdfe117c6729267c1595cdf0a587da8-Paper-Conference.pdf)
- **Synthetic recall** (behaviors tasks) — *causes*
  > “this bias impairs the models’ ability to recall distant information”
  - [Understanding and Mitigating Bottlenecks of State Space Models through the Lens of Recency and Over-smoothing](https://proceedings.iclr.cc/paper_files/paper/2025/file/ccdfe117c6729267c1595cdf0a587da8-Paper-Conference.pdf)
- **Long-context understanding** (constructs) — *causes*
  > In next-token prediction settings, focusing on local tokens often suffices for short contexts, but can be detrimental when crucial information resides far back in the input.
  - [On-the-Fly Adaptive Distillation of Transformer to Dual-State Linear Attention for Long-Context LLM Serving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ro25a/ro25a.pdf)

### Associated with
- **Positional bias** (constructs)
  > “This approach may appear to improve faithfulness, but it ultimately replaces one positional bias, i.e., lost-in-the-middle, with another, i.e., recency bias.”
  - [On Positional Bias of Faithfulness for Long-form Summarization](https://aclanthology.org/2025.naacl-long.442.pdf)
- **Attention sink** (constructs)
  > These attention distributions give rise to three corresponding biases: i) Attention sink, where focus is concentrated on the initial few tokens. ii) Recency bias, where attention is more strongly concentrated at the tail. iii) Middle bias, where attention is disproportionately focused on a few tokens in the middle of a sequence. (Section 4)
  - [ParallelComp: Parallel Long-Context Compressor for Length Extrapolation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiong25b/xiong25b.pdf)
