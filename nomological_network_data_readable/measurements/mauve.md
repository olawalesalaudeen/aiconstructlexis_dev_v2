# MAUVE
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** Mauve  

## State of the Field

Across the provided literature, MAUVE is consistently used as an automatic metric to evaluate text generation by comparing the distribution of machine-generated text to that of human-written or reference text. The most prevalent definition describes it as a non-parametric method that compares embedding distributions using a mixture of forward and reverse KL divergences. A few papers provide a more specific mechanism, stating that it calculates the "area under the KL divergence curve" to measure this similarity. The primary application of MAUVE is to assess the "distributional similarity" between generated and ground-truth text, which is often framed as a measure of overall generation quality. The relationships data confirms its use for evaluating both general "Text generation" and "Conditional text generation". In addition to this general use, some studies employ MAUVE to quantify more specific attributes, such as "fluency" or "style consistency" between training data and model outputs.

## Sources

**[Closing the Curious Case of Neural Text Degeneration](https://proceedings.iclr.cc/paper_files/paper/2024/file/34899013589ef41aea4d7b2f0ef310c1-Paper-Conference.pdf)**
> A non-parametric method for evaluating generative models by comparing the embedding distributions of generated and real text using a mixture of forward and reverse KL divergences.

**[EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING](https://proceedings.iclr.cc/paper_files/paper/2024/file/1626be0ab7f3d7b3c639fbfd5951bc40-Paper-Conference.pdf) (as "Mauve")**
> Mauve is a metric that compares generated text to human text by computing the area under the curve of KL divergences between the two distributions, used to assess distributional similarity in open-ended text generation.

## Relationships

### → MAUVE
- **Text generation** (behaviors tasks) — *measured_by*
  > "Mauve ... has seen wide usage in open-ended text generation"
  - [EMO: EARTH MOVER DISTANCE OPTIMIZATION FOR AUTO-REGRESSIVE LANGUAGE MODELING](https://proceedings.iclr.cc/paper_files/paper/2024/file/1626be0ab7f3d7b3c639fbfd5951bc40-Paper-Conference.pdf)
- **Conditional text generation** (behaviors tasks) — *measured_by*
  > We evaluate conditional generation using the MAUVE score (Pillutla et al., 2021).
  - [Beyond Autoregression: Fast LLMs via Self-Distillation Through Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/0f93c3e9b557980d93016671acd94bd2-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > "we use the MAUVE metric ... to measure the quality of generated text against the real text"
  - [PoisonedParrot: Subtle Data Poisoning Attacks to Elicit Copyright-Infringing Content from Large Language Models](https://aclanthology.org/2025.naacl-long.415.pdf)
