# Chart question answering
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Chart-based question answering, Figure question answering, Figure-based question answering  

## State of the Field

**Space of definitions.** Most commonly, papers frame this behavior as answering a natural language question from information contained in a chart, usually by producing a direct textual answer, though some definitions also allow numerical, categorical, or textual responses. Several descriptions focus on a chart image or visual chart, one explicitly includes the chart's underlying data, and a smaller line of work broadens the task to answering questions about figures more generally. Some formulations further stress arithmetic, logical, multi-step visual reasoning, or statistical reasoning over charted data.

**Variants.** Papers use several names for closely related versions, including chart question answering, chart-based question answering, figure question answering, and figure-based question answering. The visual inputs range from charts to broader figures, plots, and diagrams, with specific chart types including bar charts, line charts, and pie charts. Some figure-oriented formulations mention multiple charts and plots, and one description places it as a type of visual question answering over data visualizations.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, ChartQA. It is connected to that instrument both by listing ChartQA under Figure QA and by describing ChartQA as introducing charts from real-world sources; no other instrument is linked.

**What it is taken as evidence of.** Construct links name three constructs: Local reasoning, Multimodal perception, and Reasoning. Only one paper makes these links, saying reasoning is measured by chart question answering, and more specifically that multimodal perception and local reasoning are measured by it.

## Sources

**[AMACE: Automatic Multi-Agent Chart Evolution for Iteratively Tailored Chart Generation](https://aclanthology.org/2025.emnlp-main.1089.pdf) (as "Chart-based question answering")**
> Generating textual responses to questions by analyzing a visual chart and its underlying data.

**[ChartMind: A Comprehensive Benchmark for Complex Real-world Multimodal Chart Question Answering](https://aclanthology.org/2025.emnlp-main.226.pdf)**
> Generating answers to natural language questions based on information presented in a chart, including numerical, categorical, or textual responses.

**[F2TEval: Human-Aligned Multi-Dimensional Evaluation for Figure-to-Text Task](https://aclanthology.org/2025.emnlp-main.195.pdf) (as "Figure question answering")**
> Answering questions about information contained in a figure.

**[Diving into Self-Evolving Training for Multimodal Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25aj/liu25aj.pdf) (as "Figure-based question answering")**
> The task of answering questions that require interpreting data presented in figures, diagrams, or charts.

## Relationships

### Chart question answering →
- **ChartQA** (measurements) — *measured_by*
  > "ChartQA (Masry et al., 2022) | Figure QA"
  - [F2TEval: Human-Aligned Multi-Dimensional Evaluation for Figure-to-Text Task](https://aclanthology.org/2025.emnlp-main.195.pdf)

### Associated with
- **Reasoning** (constructs)
  > "Chart question answering (CQA) has become a critical multimodal task for evaluating the reasoning capabilities of vision-language models."
  - [ChartMind: A Comprehensive Benchmark for Complex Real-world Multimodal Chart Question Answering](https://aclanthology.org/2025.emnlp-main.226.pdf)
- **Multimodal perception** (constructs)
  > "Chart question answering (Ma et al., 2024; Qin et al., 2022) is a prominent multimodal task designed to evaluate the reasoning capabilities of vision-language models, especially their multimodal perception ability and local reasoning ability."
  - [ChartMind: A Comprehensive Benchmark for Complex Real-world Multimodal Chart Question Answering](https://aclanthology.org/2025.emnlp-main.226.pdf)
- **Local reasoning** (constructs)
  > "Chart question answering (Ma et al., 2024; Qin et al., 2022) is a prominent multimodal task designed to evaluate the reasoning capabilities of vision-language models, especially their multimodal perception ability and local reasoning ability."
  - [ChartMind: A Comprehensive Benchmark for Complex Real-world Multimodal Chart Question Answering](https://aclanthology.org/2025.emnlp-main.226.pdf)
