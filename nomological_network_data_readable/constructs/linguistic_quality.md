# Linguistic quality
**Type:** Construct  
**Referenced in:** 16 papers  
**Also known as:** Linguistic correctness, Linguistic coherence, Language quality, Grammaticality  

## State of the Field

**Definition agreement:** Complementary. Most papers define linguistic quality as a property of generated text involving fluent, natural, grammatically correct language, often also mentioning coherence or clarity. A few papers narrow this to grammatical rule adherence, while others broaden it to style, richness, complexity, or edited outputs, so they are describing compatible facets of the same output-quality phenomenon rather than one identical definition.

**Space of definitions.** Across papers, the prevailing usage describes linguistic quality as output quality: generated text should be fluent, coherent, natural, clear, and free of grammatical or spelling errors. Several definitions add related cues such as being logical, smooth, easy to understand, stylistically appropriate, rich in vocabulary, or free of repetition and inconsistency. A smaller group of definitions narrows the construct to grammaticality or syntactic correctness, and one definition treats it as a latent model property reflected in the richness, coherence, and complexity of word transition graphs.

**Space of facets.** Papers mostly unpack the construct into facets such as clarity, fluency, naturalness, coherence, grammatical correctness, spelling or punctuation, stylistic appropriateness, structural completeness, and the absence of repetition or inconsistency. Across papers, overlapping labels are used for closely related notions, including linguistic quality, linguistic correctness, linguistic coherence, language quality, and grammaticality. The broader labels usually combine several of these facets, while narrower labels isolate grammar-focused evaluation; one paper also pairs grammaticality with faithfulness, and another contrasts linguistic coherence with factual accuracy.

**Space of measurement.** Operationalization spans 7 linked measurement instruments and 2 linked behavioral indicators. Named instruments include Human evaluation, LLM-as-a-judge, AlpacaEval, Manual error analysis, and PLLuM-Align, plus 2 others, WikiData_recent and WikiText-2. These measurements make the construct concrete through prompts that ask whether responses are logical, smooth, and natural, LLM grading of clarity and grammaticality, professionally trained evaluators rating language quality, pairwise comparisons, manual annotation of inconsistencies and linguistic errors, 5-point Likert ratings of linguistic correctness, fluency on WikiData_recent, and log perplexity on WikiText-2 as a measure of general language quality; these choices mostly match the dominant fluency and correctness framing, though one definition instead infers the property from structural patterns in word transition graphs.

**Links.** Outside measurement, papers do not report causal or correlational links. A few papers describe linguistic quality as related to knowledge editing and to hallucination detection: one treats it as one of the aspects analyzed in knowledge editing, alongside accuracy, locality, and generalization, and another reports that embeddings optimized for linguistic coherence rather than factual accuracy often fail to clearly separate truthful and hallucinated content.

## Sources

**[MedJourney: Benchmark and Evaluation of Large Language Models over Patient Clinical Journey](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f80af32390984cb709cdeb014d0df41-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The quality of a model's generated text in terms of being logical, coherent, smooth, and natural-sounding.

**[PLLuM-Align: Polish Preference Dataset for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.1219.pdf) (as "Linguistic correctness")**
> The latent proficiency of a model in producing grammatically correct, stylistically appropriate, and normatively fluent text in the target language.

**[Steer LLM Latents for Hallucination Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25a/park25a.pdf) (as "Linguistic coherence")**
> The quality of generated text being fluent, plausible, and syntactically correct, for which LLMs are primarily optimized via next-token prediction.

**[Uncovering Safety Risks of Large Language Models through Concept Activation Vector](https://proceedings.neurips.cc/paper_files/paper/2024/file/d3a230d716e65afab578a8eb31a8d25f-Paper-Conference.pdf) (as "Language quality")**
> The linguistic correctness and fluency of a model's generated text, assessed by the absence of flaws like repetition or inconsistency.

**[CLEME2.0: Towards Interpretable Evaluation by Disentangling Edits for Grammatical Error Correction](https://aclanthology.org/2025.acl-long.10.pdf) (as "Grammaticality")**
> The degree to which a system's output text is grammatically correct and adheres to the rules of a language.

## Relationships

### Linguistic quality →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > Linguistic Quality: The response logical. The model correctly understands the medical task, and the expressions smooth and natural. (Section 4.2.4, The Prompt for GPT-4 to Rate the Performance of QA Tasks)
  - [MedJourney: Benchmark and Evaluation of Large Language Models over Patient Clinical Journey](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f80af32390984cb709cdeb014d0df41-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > Linguistic Quality: The response logical. The model correctly understands the medical task, and the expressionis smooth and natural. (Section 4.2.5, The Instruction of Human Evaluation)
  - [MedJourney: Benchmark and Evaluation of Large Language Models over Patient Clinical Journey](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f80af32390984cb709cdeb014d0df41-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Manual error analysis** (measurements) — *measured_by*
  > To investigate the impact of DPSGD and distillation on inconsistencies and linguistic quality, we manually annotated 50 outputs each from the XSum, MRPC, and Pubmed test sets. (Section 5.4)
  - [Differentially Private Learning Needs Better Model Initialization and Self-Distillation](https://aclanthology.org/2025.naacl-long.455.pdf)
- **WikiText-2** (measurements) — *measured_by*
  > log perplexity, the average negative log-likelihood of generated tokens on the Wikitext-2 dataset (Merity et al., 2016); ... The latter two metrics measure general language quality (Section 3.1)
  - [How Does DPO Reduce Toxicity? A Mechanistic Neuron-Level Analysis](https://aclanthology.org/2025.emnlp-main.1501.pdf)
- **PLLuM-Align** (measurements) — *measured_by*
  > For scalar multi-attribute rating, annotators evaluated each response on a 5-point Likert scale across seven criteria: i) truthfulness, (ii) linguistic correctness, (iii) safety, (iv) fairness, (v) conciseness, (vi) coherence & reasoning, as well as vii) helpfulness & instruction-following.
  - [PLLuM-Align: Polish Preference Dataset for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.1219.pdf)

### Associated with
- **Knowledge editing** (behaviors tasks)
  > “We analyze ICE across four critical aspects of knowledge editing: accuracy, locality, generalization, and linguistic quality, demonstrating its advantages.”
  - [In-Context Editing: Learning Knowledge from Self-Induced Distributions](https://proceedings.iclr.cc/paper_files/paper/2025/file/c0ff9e52e94ae331bc0f2d28be06a9ca-Paper-Conference.pdf)
- **Hallucination detection** (behaviors tasks)
  > Recent approaches have leveraged the latent space of LLMs for hallucination detection, but their embeddings, optimized for linguistic coherence rather than factual accuracy, often fail to clearly separate truthful and hallucinated content. (Abstract)
  - [Steer LLM Latents for Hallucination Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25a/park25a.pdf)
