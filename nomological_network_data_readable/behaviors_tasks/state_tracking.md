# State tracking
**Type:** Behavior  
**Referenced in:** 14 papers  
**Also known as:** Variable tracking  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats state tracking under the name variable tracking: keeping track of changing variable values, or monitoring and reporting variable states, when updates occur multiple times within a long context. Definitions align on following variable assignments given in context and recovering their current values after successive updates. One description says the task "involves tracking the variable assignments provided in the context" (Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study).

**Variants.** The main named variant is variable tracking. A smaller line of work broadens the behavior beyond explicit variable updates: one paper treats shortest path finding as requiring the model to maintain the state of its exploration in a graph, and multi-hop translation as requiring it to keep track of translated outputs across intermediate languages. Another paper places state tracking in a category that "extends the concept of Fluent Tracking."

**Space of elicitation and scores.** Papers link state tracking to 2 measurement instruments overall, though only RULER is explicitly said to measure it. RULER is described as a benchmark that includes variable tracking or state tracking tasks, and papers use its VT task to evaluate long-context capabilities; one paper also operationalizes state tracking through shortest path finding and machine translation, specifically multi-hop translation. Coin Flip is the other linked instrument, but there it is only related to state tracking: a paper says models can reason step by step yet "easily lose track of the states" as task complexity increases.

**What it is taken as evidence of.** Papers do not converge on a single construct linked to state tracking. It is linked to 4 constructs overall: long-context understanding is related to it, state tracking ability is related to it, and theory of mind is related to it, with one paper stating that tracking mental states necessarily requires being able to track states. Separately, one paper claims a causal relationship from expressive power to state tracking, arguing that finite state machines form the backbone of many real-world state-tracking problems (Implicit Language Models are RNNs: Balancing Parallelization and Expressivity).

## Sources

**[Scaling Stick-Breaking Attention: An Efficient Implementation and In-depth Study](https://proceedings.iclr.cc/paper_files/paper/2025/file/0b9a261b9aca858b7e6ee44d8b2055be-Paper-Conference.pdf) (as "Variable tracking")**
> The task of keeping track of the changing values of variables that are updated multiple times within a long context.

## Relationships

### State tracking →
- **RULER** (measurements) — *measured_by*
  > The RULER benchmark ... encompasses ... tasks involving variable tracking
  - [Why Does the Effective Context Length of LLMs Fall Short?](https://proceedings.iclr.cc/paper_files/paper/2025/file/884baf65392170763b27c914087bde01-Paper-Conference.pdf)

### → State tracking
- **Expressive power** (constructs) — *causes*
  > Transformers, despite their dominance on contemporary language benchmarks, exhibit fundamental limitations in computational expressiveness... they cannot fully recognize regular languages (Bhattamishra et al., 2020) or, equivalently, represent finite state machines (FSMs) (Merrill et al., 2022). This limitation is significant because FSMs form the backbone of many real-world state-tracking problems...
  - [Implicit Language Models are RNNs: Balancing Parallelization and Expressivity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/schone25a/schone25a.pdf)

### Associated with
- **Coin Flip** (measurements)
  > on Coin-Flip and Web-of-Lies, we observe that the model can generate CoT paths that simulate the process step-by-step, but it can easily lose track of the states, especially when the task complexity increases. This reveals model’s intrinsic vulnerability in performing accurate state tracking. (Section 3.2)
  - [Chain-of-Thought Reasoning Without Prompting](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a8e7fd295aa04eac4b470ae27f8785c-Paper-Conference.pdf)
- **Theory of mind** (constructs)
  > We show that LLMs struggle with basic state tracking, a fundamental skill underlying theory of mind reasoning: tracking mental states necessarily requires being able to track states. (Section 1)
  - [Explore Theory of Mind: program-guided adversarial data generation for theory of mind reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a901d5540789a086ee0881a82211b63d-Paper-Conference.pdf)
- **Code generation** (behaviors tasks)
  > In recurrent models, Gated DeltaNet shows consistent advantages, especially in ... Code tasks, demonstrating its superior capabilities in ... state tracking, respectively.
  - [Gated Delta Networks: Improving Mamba2 with Delta Rule](https://proceedings.iclr.cc/paper_files/paper/2025/file/4904fad153f6434a7bcf04465d4be2cc-Paper-Conference.pdf)
- **Long-context understanding** (constructs)
  > To evaluate long-context capabilities, we use the RULER benchmark (Hsieh et al., 2024), which consists of a set of synthetic needle-in-a-haystack, question-answering and variable tracking tasks, with varying context length from 4K to 131K tokens. (Section 5.1)
  - [xLSTM 7B: A Recurrent LLM for Fast and Efficient Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/beck25b/beck25b.pdf)
- **Shortest path finding** (behaviors tasks)
  > In the Shortest Path task, the model must find the shortest path from a given node to another. Intuitively, to effectively solve the problem, the model should maintain the state of its exploration in the graph
  - [SYNC: A Synthetic Long-Context Understanding Benchmark for Controlled Comparisons of Model Capabilities](https://aclanthology.org/2025.emnlp-main.1707.pdf)
- **Machine translation** (behaviors tasks)
  > A more challenging task, Multi-hop Translation, further requires the model to perform a sequence of translations across multiple languages. ... the model must correctly apply consecutive bilingual dictionaries while keeping track of the translated outputs across the intermediate languages.
  - [SYNC: A Synthetic Long-Context Understanding Benchmark for Controlled Comparisons of Model Capabilities](https://aclanthology.org/2025.emnlp-main.1707.pdf)
