# Long-term time series forecasting
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Long-term forecasting  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing framing treats this behavior as predicting time series values over a long future horizon from a historical sequence. The available description is narrow and task-oriented: one paper defines it exactly this way, and the accompanying snippets describe evaluation on long-term forecasting tasks with multiple forecast horizons, such as 24, 36, 48, and 60 for ILI and 96, 192, 336, and 720 for other cases (Context-Alignment: Activating and Enhancing LLMs Capabilities in Time Series).

**Variants.** Papers mostly refer to the behavior as long-term forecasting, and one relationship quote also names it long-term time-series forecasting, abbreviated LTSF. The observed variants are setting-based rather than definition-based: it appears in regression use, across eight prevalent datasets in one description, and under different forecast-horizon configurations rather than different success criteria.

**Space of elicitation and scores.** Papers link it to one measurement instrument, ETTh1, which is used as a dataset-based instrument for this task. One paper states that it is measured by ETTh1 in a regression setting for long-term time-series forecasting, saying it uses the ETTh1 datasets to showcase utility on LTSF.

## Sources

**[Context-Alignment: Activating and Enhancing LLMs Capabilities in Time Series](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1de63ec74f40d3234c4e053f3528e18-Paper-Conference.pdf) (as "Long-term forecasting")**
> The task of predicting time series values over a long future horizon based on a historical sequence.

## Relationships

### Long-term time series forecasting →
- **ETTh1** (measurements) — *measured_by*
  > For regression, we showcase the filter’s utility in long-term time-series forecasting (LTSF) using the ETTh1, ETTh2 [Zhou et al., 2021] datasets with concurrent specialized LTSF models. (Section §1, Outline)
  - [Filtered not Mixed: Filtering-Based Online Gating for Mixture of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d4c2f25bf0c33065b7d4fb9be2a9add1-Paper-Conference.pdf)
