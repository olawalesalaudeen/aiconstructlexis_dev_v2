# Fidelity
**Type:** Construct  
**Referenced in:** 16 papers  
**Also known as:** Image fidelity, Visual quality, Image quality  

## State of the Field

**Definition agreement:** Consensus. Most papers use fidelity to mean the perceptual or technical quality of generated visual outputs, especially realism, well formedness, clarity, and freedom from artifacts, with one paper expressing this in the chart setting through layout and readability. A few papers use the term instead for concept to neuron alignment or for preservation of semantic meaning in transformed text, but these are isolated outliers rather than a substantial competing definition.

**Space of definitions.** Across the papers, the prevailing usage treats fidelity as a quality dimension of generated outputs, usually visual ones: outputs are described as realistic, high-quality, well-formed, and free from artifacts or unintended distortions. Within that visual framing, scope varies from a narrower focus on realism and artifact-freeness to broader visual quality notions that include clarity, aesthetic appeal, readability, resolution, brightness, and color. Smaller lines of work use the same term for different reference objects: one defines fidelity as preserving the semantic information of the original watermarked text, saying it "reflects the similarity between y and yw," and another defines it as how accurately a natural language concept matches a neuron's activation pattern through precision and recall.

**Space of facets.** Within visual-generation papers, fidelity is treated as one evaluation aspect among others: one paper groups it with Overall and Alignment, and a benchmark comparison describes existing text-to-video benchmarks as often assessing visual quality and text relevance. Papers use image fidelity, visual quality, and image quality as closely neighboring labels, and some broaden the construct to include aesthetic appeal, clarity, readability, layout, titles and labels, resolution, brightness, and color. In other uses, one paper contrasts Fidelity with Efficacy, while another formalizes fidelity of an interpretation as δ = 1 - min{recall, precision}.

**Space of measurement.** Papers link fidelity to 4 measurement instruments and 1 behavioral indicator. The linked instruments are the benchmarks MSR-VTT, UCF-101, VBench, and VisEval; one benchmark comparison says many such benchmarks assess visual quality and text relevance, and another paper assesses chart visual quality on VisEval with a VLM Score metric. The only linked behavioral indicator is Citation generation, and the measurement links are concentrated on the visual-quality use of the term rather than the text-preservation or neuron-interpretation uses.

**Links.** One paper claims a causal relationship from Citation generation to Fidelity, reporting that responses with citation can boost fidelity. No correlational links are reported, and no related links to other constructs are recorded.

## Sources

**[Neural Residual Diffusion Models for Deep Scalable Vision Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/d51ceadaf09a4699f18986702df24987-Paper-Conference.pdf)**
> The degree to which generated outputs are realistic, high-quality, and free from artifacts.

**[Localize, Understand, Collaborate: Semantic-Aware Dragging via Intention Reasoner](https://proceedings.neurips.cc/paper_files/paper/2024/file/3dd7c683eddc14f8cabcd6ce8d48cd41-Paper-Conference.pdf) (as "Image fidelity")**
> The degree to which a generated image is realistic, high-quality, and free from artifacts or unintended distortions.

**[MetaDesigner: Advancing Artistic Typography through AI-Driven, User-Centric, and Multilingual WordArt Synthesis](https://proceedings.iclr.cc/paper_files/paper/2025/file/a10c3d85879c29331ba4d73ede56c7d3-Paper-Conference.pdf) (as "Visual quality")**
> The overall aesthetic appeal, fidelity, and clarity of the generated image.

**[ICG: Improving Cover Image Generation via MLLM-based Prompting and Personalized Preference Alignment](https://aclanthology.org/2025.emnlp-main.617.pdf) (as "Image quality")**
> A general assessment of the generated image's technical and visual excellence, including aspects like realism and lack of artifacts.

## Relationships

### Fidelity →
- **Min-K% Prob** (measurements) — *measured_by*
  > “To address this issue, we deliberately select uncontaminated LLM-benchmark pairs and then manually contaminate the LLMs. ... To achieve this, we apply three BDC detection methods from distinct categories—Min-K% Prob (Shi et al., 2023), Sharded Rank Comparison Test (Oren et al., 2023), and TS-Guessing (Deng et al., 2023)”
  - [The Emperor’s New Clothes in Benchmarking? A Rigorous Examination of Mitigation Strategies for LLM Benchmark Data Contamination](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25t/sun25t.pdf)
- **VisEval** (measurements) — *measured_by*
  > To evaluate the visual quality of the generated charts, we conducted an analysis using the VLM Score metric on the VisEval benchmark with k = 15. (Section 4.6)
  - [Reliable and Cost-Effective Exploratory Data Analysis via Graph-Guided RAG](https://aclanthology.org/2025.emnlp-main.836.pdf)

### → Fidelity
- **Citation generation** (behaviors tasks) — *causes*
  > we can find that model response with citation can boost both the model performance and its fidelity. (Section 5.2)
  - [$\textitL-CiteEval$: A Suite for Evaluating Fidelity of Long-context Models](https://aclanthology.org/2025.acl-long.263.pdf)
